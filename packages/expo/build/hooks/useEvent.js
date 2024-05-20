import { useEffect, useState } from 'react';
export function useEvent(emitter, event) {
    const [eventParams, setEventParams] = useState([]);
    useEffect(() => {
        const listener = (...args) => {
            setEventParams(args);
        };
        const subscription = emitter.addListener(event, listener);
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
//# sourceMappingURL=useEvent.js.map