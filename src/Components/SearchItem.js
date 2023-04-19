

const SearchItem = () => {    
    const getData = () => {
        console.log("Fetching Data",count)
    }
    const debounce = function(fn,d) {
        let timer;
        return function() {
            let context = this, args = arguments;
            clearTimeout(timer)
            timer = setTimeout(() => {
                getData.apply(context,args)
            }, d);
        }
    }
    const _handleData = debounce(getData,1000)
    let count = 0;

    return (
        <>
        <div>
            <label>Search Movie: <input type='text' onChange={_handleData} /></label>
        </div>
        </>
    )
}
export default SearchItem;