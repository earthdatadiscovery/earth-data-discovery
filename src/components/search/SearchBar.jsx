import React from "react";
import { StoreContext } from "../../store/index";
import { setResult } from "../../actions/store";
import MeiliSearch from "meilisearch";

const client = new MeiliSearch({
  host: "https://sandbox-pool-xi7fypa-3bsbgmeayb75w.ovh-fr-2.platformsh.site/",
  apiKey: "zdeGjerpSEiKBJZSMBZb",
});

const index = client.getIndex("nasa");

export default function SearchBar() {
  const [searchedWord, setSearchedWord] = React.useState("");
  const { state, dispatch } = React.useContext(StoreContext);

  React.useEffect(() => {
    // Create an scoped async function in the hook
    async function searchWithMeili() {
        const search = await index.search(searchedWord);
        dispatch(setResult(search));
    }
    // // Execute the created function directly
    searchWithMeili();
  }, [searchedWord]);

  React.useEffect(() => {
    console.log(state.result);
  }, [state.result]);

  return (
    <div> 
      <input
        type="text"
        value={searchedWord}
        onChange={(event) => setSearchedWord(event.target.value)}
        className="px-6 py-4 w-full text-black"
        placeholder="Search"
      />
  </div>
  );
}