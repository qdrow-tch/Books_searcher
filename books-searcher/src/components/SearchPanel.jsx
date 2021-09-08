import React from "react";
import SearchInput from "./UI/inputs/insearch/InputSrch";
import FilterSelect from "./UI/selectors/filterslc/FilterSelect";
import SortSelect from "./UI/selectors/sortslc/SortSelect";

function SearchPanel(props) {
    let propsSearchPanel = {
        setBooks: props.setBooks,
        categories: props.categories,
        quantity: props.quantity,
        sort_by: props.sort_by,
        keywords: props.keywords,
        setKeyWords: props.setKeyWords
    }
    return (
        <div className="SearchPanel">
            <SearchInput {...propsSearchPanel} />
            <br/>
            <FilterSelect
                value={props.categories}
                onChange={filter => props.setCategories(filter)}
                defaultValue="All"
                options={[
                    {value: '+subject:art', name: 'Art'},
                    {value: '+subject:biography', name: 'Biography'},
                    {value: '+subject:computers', name: 'Computers'},
                    {value: '+subject:history', name: 'History'},
                    {value: '+subject:medical', name: 'Medical'},
                    {value: '+subject:poetry', name: 'Poetry'},
                ]}
            />
            <SortSelect
                value={props.sort_by}
                onChange={sort=>props.setSortName(sort)}
                defaultValue="relevance"
                options={[
                    {value: 'orderBy=newest', name: 'newest'},
                ]}
            />
        </div>
    );
}

export default SearchPanel;