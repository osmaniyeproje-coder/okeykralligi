const Players = {

    load() {

        const db = Storage.get();

        if (db.players.length === 0) {

            db.players = [

                { id: 1, name: "Bahattin Konut", active: true },
                { id: 2, name: "Mehmet Can Zile", active: true },
                { id: 3, name: "Ahmet Ziya Bitim", active: true },
                { id: 4, name: "Deniz Kuyluk", active: true },
                { id: 5, name: "Seçkin Yılmaz", active: true },
                { id: 6, name: "Rüştü Korkmaz", active: true },
                { id: 7, name: "Recep Koca", active: true },
                { id: 8, name: "Gökhan Toprak", active: true },
                { id: 9, name: "Veysi Temel", active: true },
                { id: 10, name: "Hakan Göktaş", active: true },
                { id: 11, name: "Murat Gül", active: true },
                { id: 12, name: "Aytek Evren", active: true },
                { id: 13, name: "Fatih Öztekin", active: true },
                { id: 14, name: "Ahmet Erkam Ketmen", active: true },
                { id: 15, name: "Uğur Ede", active: true }

            ];

            Storage.save(db);

        }

    },

    getAll() {

        return Storage.get().players;

    },

    add(name) {

        const db = Storage.get();

        db.players.push({
            id: Date.now(),
            name,
            active: true
        });

        Storage.save(db);

    }

};
