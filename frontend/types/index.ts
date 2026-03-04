type User = {
    id: string
    name: string

}

type Project = {
    id: string
    userid: string
    tags: []
    portraitid: string
}

type Portrait = {
    // this should extend the blocks as it could be ay of those, but i dont know the correct implementation yet
}

type Imageblock = {
    type: "image"
    id: string
    url?: string
    filepath?: string
    connections: number[]
    author: string
    position: number[] // should be a tuple xy
}

type VideoBlock = {
    type: "video"
    id: string
    url?: string
    filepath?: string
    connections: number[]
    author: string
    position: number[]
}

type MusicBlock = { 
    type: "music"
    id: string
    url: string
    connections: number[]
    appId?: string
    filePath?: string
    author: string
    position: number[]
    
}



type PlaceBlock = {
    type: "place"
    url: string
    position: number[]
}

type TextBlock = {
    type: "text"
    position: number[]
}