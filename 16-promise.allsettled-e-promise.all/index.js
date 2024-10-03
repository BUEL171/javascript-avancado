const loadUsers = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([
                {id: 1, name: "Jhon"},
                {id: 1, name: "Jane"},
            ]);
        }, 2000);
    });
};

const loadRepositories = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([
                {id: 1, name: "Repo 1"},
                {id: 1, name: "Repo 2"},
            ]);
        }, 2000);
    });
};

const loadAll = async () => {
    try {
        const result = await Promise.all([
            loadUsers(),
            loadRepositories(),
            loadEvents(),
        ])
    }
};

loadAll()