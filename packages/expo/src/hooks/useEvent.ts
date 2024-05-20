import type { EventEmitter, EventsMap } from 'expo-modules-core/src/ts-declarations/EventEmitter';
import { useEffect, useState } from 'react';

declare class SharedObject<TEventsMap extends EventsMap = Record<never, never>>
  extends EventEmitter<TEventsMap>
  implements EventEmitter<TEventsMap> {}

type VideoPlayerEvents = {
  playToEnd(): void;
  dupa(newValue: string, oldValue: number): void;
};
declare class VideoPlayer extends SharedObject<VideoPlayerEvents> {}

export function useEvent<TEventsMap extends EventsMap>(
  emitter: EventEmitter<TEventsMap>,
  event: keyof TEventsMap
): Parameters<TEventsMap[keyof TEventsMap]> | [] {
  const [eventParams, setEventParams] = useState<Parameters<TEventsMap[keyof TEventsMap]> | []>([]);

  useEffect(() => {
    const listener = (...args: Parameters<TEventsMap[keyof TEventsMap]>) => {
      setEventParams(args);
    };
    const subscription = emitter.addListener(event, listener as TEventsMap[keyof TEventsMap]);
    return () => {
      subscription.remove();
    };
  }, [emitter, event]);

  return eventParams;
}

function A() {
  // Also see `expo-modules-core/src/ts-declarations/EventEmitter.ts`
  const player = new VideoPlayer();
  const [newValue, oldValue] = useEvent(player, 'dupa');

  useEvent(player, 'kupa');
  useEvent(player, 'playToEnd');
  useEvent(player, 'zupa');
}
