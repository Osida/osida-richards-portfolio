import {useEffect, useState} from 'react';
import data from "../../../data";
import {useAnimation} from "framer-motion";


const animateCardVariants = {
    static: {y: 0, opacity: 1},
    inMotion: {
        y: 100, opacity: 0,
        transition: {
            duration: 0.3, delayChildren: 0.3
        }
    },
}

// const {info: {work: {tabs}}} = data

const FilterWorks = (works: SanityDoc.Works[]) => {
    const [activeFilter, setActiveFilter] = useState<string>('All')
    const [filterWork, setFilterWork] = useState<SanityDoc.Works[]>([])

    const controls = useAnimation()

    useEffect(() => {
        setFilterWork(works)
    }, [works]);

    const handleSetActiveFilter = (filterOn: string) => setActiveFilter(filterOn)

    const handleSetFilterWork = (works: SanityDoc.Works[]) => setFilterWork(works)

    const filterByTab = (works: SanityDoc.Works[], filterOn: string) => {
        const filtered: SanityDoc.Works[] = works.filter((work) => work.tags.includes(filterOn))
        setFilterWork(filtered)
    }

    const handleWorkFilter = async (filterOn: string) => {
        handleSetActiveFilter(filterOn)
        await controls.start(animateCardVariants.inMotion)

        setTimeout(() => {
            controls.start(animateCardVariants.static)
            filterOn === 'All' ? handleSetFilterWork(works) : filterByTab(works, filterOn)
        }, 500)
    }

    return {
        activeFilter,
        filterWork,
        handleSetActiveFilter,
        handleSetFilterWork,
        handleWorkFilter,
        filterByTab,
        animateCardVariants,
        controls
    }
}

export default FilterWorks;