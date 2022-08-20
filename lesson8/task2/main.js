// Цикл в циклі
// - Є масив
let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'git',
            'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];
//
// Створити для кожного елементу масиву свій блок, блок розділити блоками, в яких будуть зберігатись значення
// окремих властивостей, для властивості modules зробити список з елементами
// Приклад структири знаходиться у файлі example.png


for (const coursesArrayElement of coursesArray) {
    let block = document.createElement('div')
    block.style.border = '2 px solid black'

    let blockTitle = document.createElement('div')
    blockTitle.innerText = coursesArrayElement.title
    blockTitle.style.border = '1px solid black';


    let wrap = document.createElement(`div`);
    wrap.style.height = '30px'
    wrap.style.display = 'flex';
    wrap.style.justifycontent = 'center';
    wrap.style.alignitems = 'center';
    wrap.style.marginTop = '5px'


    let month = document.createElement(`div`)
    month.innerText = coursesArrayElement.monthDuration;
    month.style.width = '49.5%'
    month.style.border = '1px solid black';
    month.style.marginRight = '5px'

    let hour = document.createElement(`div`)
    hour.innerText = coursesArrayElement.hourDuration;
    hour.style.width = '49.5%'
    hour.style.border = '1px solid black'

    let modules = document.createElement(`ul`)
    modules.style.border = '1px solid black'

    let module = coursesArrayElement.modules
    for (const moduleElement of module) {
        let liList = document.createElement(`li`)
        liList.append(moduleElement)
        modules.append(liList)
        liList.style.border = '1px solid black'
        liList.style.margin = '5px'
    }


    wrap.append(month,hour)
    block.append(blockTitle,wrap,modules)
    document.body.append(block)
}