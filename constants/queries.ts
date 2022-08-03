const sanity = {
        abouts: "*[_type == 'abouts']",
        brands: "*[_type == 'brands']",
        contacts: "*[_type == 'contact']",
        workExperience: "*[_type == 'workExperience']",
        experiences: "*[_type == 'experiences']",
        skills: "*[_type == 'skills']",
        testimonials: "*[_type == 'testimonials']",
        works: "*[_type == 'works']",
    },
    api = {
        abouts: "/api/abouts",
        skills: "/api/skills",
        works: "/api/works",
    },
    queries = {sanity, api}


export default queries
