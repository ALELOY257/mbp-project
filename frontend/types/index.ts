export type User = {
    id: string
    name: string
}

export type Project = {
    id: string
    author: Pick<User, 'id' | 'name'>
    tags: string[]
    portrait: Block
    likeCount: number
    title: string
    createdAt: string
}


export type Block = Imageblock | VideoBlock | MusicBlock | PlaceBlock | TextBlock

export type Imageblock = {
    type: "image"
    id: string
    url?: string
    filepath?: string
    connections: number[]
    author: string
    position: [number, number] // should be a tuple xy
}

export type VideoBlock = {
    type: "video"
    id: string
    url?: string
    filepath?: string
    connections: number[]
    author: string
    position: [number, number]
}

export type MusicBlock = { 
    type: "music"
    id: string
    url?: string
    connections: number[]
    appId?: string
    filepath?: string
    author: string
    position: [number, number]
    
}



export type PlaceBlock = {
    type: "place"
    id: string
    name: string
    connections: number[]
    url?: string
    position: [number, number]
    coordinates?:{
        lat:number
        lng:number
    }
}

export type TextBlock = {
    type: "text"
    id:string
    author: string
    connections: number[]
    position: [number, number]
    content: string
}