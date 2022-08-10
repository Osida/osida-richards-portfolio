namespace SanityDoc {

    interface Asset {
        _ref: string;
        _type: string;
    }

    interface ImgUrl {
        _type: string;
        asset: Asset;
    }

    interface Icon {
        _type: string;
        asset: Asset;
    }

    export interface Abouts {
        _createdAt: Date;
        _id: string;
        _rev: string;
        _type: string;
        _updatedAt: Date;
        description: string;
        imgUrl: ImgUrl;
        title: string;
    }

    export interface Skills {
        _createdAt: Date;
        _id: string;
        _rev: string;
        _type: string;
        _updatedAt: Date;
        icon: Icon;
        name: string;
        bgColor: string;
    }

    export interface Works {
        _createdAt: Date;
        _id: string;
        _rev: string;
        _type: string;
        _updatedAt: Date;
        projectLink?: string;
        codeLink: string;
        description: string;
        imgUrl: ImgUrl;
        tags: string[];
        title: string;
    }
}