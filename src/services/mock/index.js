import { createServer, Model, Factory, RestSerializer } from 'miragejs';


export function makeServer() {
    const server = createServer({
        serializers: {
            application: RestSerializer
        },
        models: {
            version: Model,
        },

        routes() {
            this.namespace = "api";
            this.get("/versions");
            this.post('/versions');
            this.passthrough('http://api-studio.ebankit.local/**');
        },

        factories: {
            version: Factory.extend({
                id(i){
                    return i
                },
                name(i){
                    return `Version ${i}.0.0`;
                },
                description(i){
                    return `Description ${i}.0.0`;
                },
            })
        },

        seeds(server) {
            server.createList('version', 20)
        }
    });

    return server;
}