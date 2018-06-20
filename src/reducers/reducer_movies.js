export default function () {
    fetch("https://star-wars-api.herokuapp.com/films")
        .then(response => response.json())
        .then(data => {
            console.log(data);
            return data;
        });
    return [
        {title: 'SW-2', year: 2002, detail: 'two', director: 'dir2'},
        {title: 'SW-3', year: 2003, detail: 'three', director: 'dir3'},
        {title: 'SW-4', year: 2004, detail: 'four', director: 'dir4'},
        {title: 'SW-1', year: 2001, detail: 'one', director: 'dir1'},
        {title: 'SW-5', year: 2005, detail: 'five', director: 'dir5'},
        {title: 'SW-6', year: 2006, detail: 'six', director: 'dir6'},
    ]
}