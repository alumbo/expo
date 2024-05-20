import type { EventEmitter, EventsMap } from 'expo-modules-core/src/ts-declarations/EventEmitter';
export declare function useEvent<TEventsMap extends EventsMap>(emitter: EventEmitter<TEventsMap>, event: keyof TEventsMap): Parameters<TEventsMap[keyof TEventsMap]> | [];
//# sourceMappingURL=useEvent.d.ts.map