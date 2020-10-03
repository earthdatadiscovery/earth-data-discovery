// import React from "react";

// import MeiliSearch from "meilisearch";
// import { StoreContext } from "../../store";
// import { setResult } from "../../actions/store";

// const client = new MeiliSearch({
//   host: "http://127.0.0.1:7700/",
// });

// const index = client.getIndex("nasa");

// export async function searchWithMeili(searchedWord) {
//     const { state, dispatch } = React.useContext(StoreContext);

//     const search = await index.search(searchedWord);
//     dispatch(setResult(search));
// }