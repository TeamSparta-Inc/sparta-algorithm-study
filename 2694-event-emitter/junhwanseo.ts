type Callback = (...args: any[]) => any;
type Subscription = {
    unsubscribe: () => void
}

class EventEmitter {
    private subscribers: Record<string, Callback[]> = {};

    subscribe(eventName: string, callback: Callback): Subscription {
        if (!this.subscribers[eventName]) {
            this.subscribers[eventName] = [];
        }

        this.subscribers[eventName].push(callback);
        
        return {
             unsubscribe: () => {
                const callbacks = this.subscribers[eventName];
                if (callbacks) {
                    const index = callbacks.indexOf(callback);
                    if (index > -1) {
                        callbacks.splice(index, 1);
                    }
                }
            }
        };
    }
    
    emit(eventName: string, args: any[] = []): any[] {
        const callbacks = this.subscribers[eventName];

        if (!callbacks || callbacks.length === 0) {
            return [];
        }

        return callbacks.map(callback => callback(...args))
    }
}

/**
 * const emitter = new EventEmitter();
 *
 * // Subscribe to the onClick event with onClickCallback
 * function onClickCallback() { return 99 }
 * const sub = emitter.subscribe('onClick', onClickCallback);
 *
 * emitter.emit('onClick'); // [99]
 * sub.unsubscribe(); // undefined
 * emitter.emit('onClick'); // []
 */