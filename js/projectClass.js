export class Project{
    constructor(){
        this.title = null;
        this.image = null;
        this.description = null;
        this.link = null;
    }

    set newTitle(title){
        this.title = title;
    }
    set newImage(image){
        this.image = image;
    }
    set newDescription(description){
        this.description = description;
    }
    set newLink(link){
        this.link = link;
    }
    get showTitle(){
        return this.title;
    }
    get showImage(){
        return this.image;
    }
    get showDescription(){
        return this.description;
    }
    get showLink(){
        return this.link;
    }
}