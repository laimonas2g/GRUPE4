import { v4 } from 'uuid';

export default class LS {

    static key;
    
    static storageInit(settings) {
        this.key = settings.key;
    }

    static read() {
        const storedData = localStorage.getItem(this.key);
        if (null === storedData) {
            return [];
        }
        return JSON.parse(storedData);
    }

    static write(data) {
        localStorage.setItem(this.key, JSON.stringify(data));
    }
    

    static store(data) {
        const id = v4();
        data.id = id;
        this.write([...this.read(), data]);
    }



}