
let initialState = {
    friends: [
        {
            id: 1,
            name: "Dimych",
            avatarURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS4BuQAQ9wJC7HlbzS9CF1_IpgSz0lM9CFIRN43yKgHnsO4G3GH"
        },
        {
            id: 2,
            name: "Boris",
            avatarURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSTS7LFEGuHZFKOc_AtQudyknAdpG1PtpKDX-81XeaB_6xJstKD"
        },
        {
            id: 3,
            name: "Alex",
            avatarURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRtrNV9_dTsu2iNNIsdlgfVPnzYYnXB47dl5jtQuudRtEtp2rFS"
        }
    ]
};

let sidebarReduser = (state = initialState, action) => {
    switch (action.type) {

        default:
            return state;
    }
};

export default sidebarReduser;