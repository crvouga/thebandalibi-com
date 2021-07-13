import { EventEmitter as NodeJsEventEmitter } from "events";
import { useEffect } from "react";

/**
 *
 *
 * source: https://rjzaworski.com/2019/10/event-emitters-in-typescript
 *
 *
 */

type EventMap = Record<string, any>;

type EventKey<T extends EventMap> = string & keyof T;

type EventReceiver<T> = (params: T) => void;

export type IEventEmitter<TEventMap extends EventMap> = {
  on<TEventKey extends EventKey<TEventMap>>(
    eventKey: TEventKey,
    fn: EventReceiver<TEventMap[TEventKey]>
  ): void;

  off<TEventKey extends EventKey<TEventMap>>(
    eventKey: TEventKey,
    fn: EventReceiver<TEventMap[TEventKey]>
  ): void;

  emit<TEventKey extends EventKey<TEventMap>>(
    eventKey: TEventKey,
    params: TEventMap[TEventKey]
  ): void;
};

export const createEventEmitter = <T extends EventMap>(): IEventEmitter<T> => {
  return new NodeJsEventEmitter();
};

export const useEventEmitter = <
  TEventMap extends EventMap,
  TEventKey extends keyof EventMap
>(
  eventEmitter: IEventEmitter<TEventMap>,
  eventHandlers: {
    [eventKey in TEventKey]: EventReceiver<TEventMap[TEventKey]>;
  }
) => {
  return useEffect(() => {
    for (const eventKey in eventHandlers) {
      eventEmitter.on(eventKey, eventHandlers[eventKey]);
    }
    return () => {
      for (const eventKey in eventHandlers) {
        eventEmitter.off(eventKey, eventHandlers[eventKey]);
      }
    };
  }, []);
};
