import { Observable } from 'rxjs';

export class SystemSocket {

    public static readonly METHOD_SOCKET = 'ws://';
    private io: WebSocket;
    private eventSts: any[];

    constructor(args: SocketArgs) {
        let url = '';
        if (args.urlFull) {
            url = args.urlFull;
        } else if (args.url && args.port) {
            url = SystemSocket.METHOD_SOCKET
                + args.url
                + ':'
                + args.port;
        }
        if (url !== '') {
            this.io = new WebSocket(url);
        }
        this.eventSts = [];
    }

    public sendMessage(msg: any) {
        // Convert msg to string
        const mes = JSON.stringify(msg);
        this.io.send(mes.toString());
    }

    public addEventListenerToSocket(eventName: string, callback: (event: any) => void) {
        try {
            const obs =  new Observable<any>(observer => {
                this.io.addEventListener(eventName, (e) => observer.next(e));
              });
            const evtSt = obs.subscribe((evt) => {
                callback(evt);
            });
            this.eventSts.push(evtSt);
        } catch (error) {
            // Nothing
        }
    }

    public close() {
        try {
            if (this.eventSts && this.eventSts.length > 0) {
                this.eventSts.forEach(evt => {
                    evt.unsubscribe();
                });
            }
            if (this.io) {
                this.io.close();
            }
        } catch (error) {
            // Nothing
        }
    }
}

export interface SocketArgs {
    urlFull?: string;
    url?: string;
    port?: string;
}
