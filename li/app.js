const Mangadex = require('mangadex-api')

Mangadex.getManga(22723).then(({ manga, chapter, group }) => {
    console.log(`Manga ${manga.title} has ${chapter.length} chapters.`)
    console.log(`And contributed by ${group.length} groups.`)
})

Mangadex.getChapter(8857).then(chapter => {
    console.log(`Chapter title is "${chapter.title}" and it is ${chapter.chapter} chapter from ${chapter.volume} volume.`)
})

// currently requires authorization
Mangadex.search('senko').then(response => {
    console.log(`Found ${response.titles.length} titles.`)
})

Mangadex.getHome().then(home => {
    if (home.accouncement) {
        console.log(`New accouncement!\n${home.accouncement.text}`)
    }
    console.log(`Todays top manga by follows is: ${home.top_manga.follows[0].title}`)
    console.log(`Todays top chapter is from manga: ${home.top_chapters.day[0].title}`)
    console.log(`Latest chapter is from manga: ${home.latest_updates.all[0].title}`)
})

Mangadex.getGroup(12).then(group => {
    console.log(`Group ${group.name} has ${group.stats.follows} followers and ${group.stats.total_chapters} total chapters uploaded!`)
})