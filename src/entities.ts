export class Course {
    id:string;
    title:string;
    ects:number;
    constructor(id:string,title:string,ects:number){
        this.id = id;
        this.title = title;
        this.ects = ects;
    }
} 