import { User, Project, Block } from "@/types"

export const MOCK_USERS: User[] = [
    { id: "1", name:"Juanito"},
    { id: "2", name: "Juanita"},
    { id: "3", name: "Ben"}

]

export const MOCK_PROJECTS: Project[] = [
    {
        id: "1",
        author: {id: "1", name: "Juanito"},
        tags: ["collage", "magazine"],
        portrait: {
            type: "image",
            id: "1",
            url: "https://i.pinimg.com/736x/3a/a3/d9/3aa3d9bc87763860f20446c737d3a93b.jpg",
            connections: [],
            author: "1",
            position: [0,0]
        },
        likeCount: 0,
        title: "test1",
        createdAt: "2026-03-10T10:30:00Z"
    },
    {
        id: "2",
        author: {id: "1", name: "Juanito"},
        tags: ["magazine" ],
        portrait: {
            type: "image",
            id: "2",
            url: "https://i.pinimg.com/736x/bc/06/fb/bc06fb92df284696e7191a5b781b97f4.jpg",
            connections: [],
            author: "1",
            position: [0,0]
        },
        likeCount: 45,
        title: "Magazine portrait",
        createdAt: "2026-03-08T10:30:00Z"
    },
    {
        id: "3",
        author: {id: "2", name: "Juanita"},
        tags: ["videoanalysis"],
        portrait: {
            type: "video",
            id: "3",
            url: "https://www.youtube.com/watch?v=JA1Jm4Mi_J4",
            connections: [],
            author: "2",
            position: [0,0]
        },
        likeCount: 0,
        title: "VideoFilm",
        createdAt: "2026-03-10T10:30:00Z"
    },
    {
        id: "4",
        author: {id: "2", name: "Juanita"},
        tags: ["edmset"],
        portrait: {
            type: "music",
            id: "4",
            url: "https://soundcloud.com/platform/i-hate-models-boiler-room-x-teletech-festival-2024?si=579a74f99527453a8efd0f730582f332&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharinghttps://soundcloud.com/platform/i-hate-models-boiler-room-x-teletech-festival-2024?si=579a74f99527453a8efd0f730582f332&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
            connections: [],
            author: "2",
            position: [0,0]
        },
        likeCount: 4789,
        title: "Beats",
        createdAt: "2026-03-08T10:30:00Z"
    },
    {
        id: "5",
        author: {id: "3", name: "Ben"},
        tags: ["cafe"],
        portrait: {
            type: "place",
            id: "5",
            url: "https://www.youtube.com/watch?v=JA1Jm4Mi_J4",
            connections: [],
            name: "My own cafe",
            position: [0,0]
        },
        likeCount: 1,
        title: "My new cafe",
        createdAt: "2026-03-10T10:30:00Z"
    },
    {
        id: "6",
        author: {id: "3", name: "Ben"},
        tags: ["poem", "magazine"],
        portrait: {
            type: "text",
            id: "6",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tortor lacus, ornare at cursus vitae, ullamcorper fringilla velit. Mauris tellus augue, dignissim non tellus in, interdum malesuada libero. Fusce molestie sem ante, at ultricies sapien maximus suscipit. Morbi dignissim ex consequat nibh aliquet, nec pellentesque nisl tincidunt. Suspendisse hendrerit ligula et erat molestie condimentum. Fusce pretium efficitur ultricies. Cras a leo lobortis, laoreet metus a, sollicitudin orci. Nulla vel euismod elit, quis viverra leo. Cras condimentum nisl vel nibh ultricies mattis.",
            connections: [],
            author: "3",
            position: [0,0]
        },
        likeCount: 1000000,
        title: "My poem",
        createdAt: "2026-03-08T10:30:00Z"
    },
    
    
]
