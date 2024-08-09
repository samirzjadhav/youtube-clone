import React from "react";
import { AppContext } from "./context/contextApi";

import Header from "./components/Header";
import Feed from "./components/Feed";
import LeftNav from "./components/LeftNav";
import SearchResult from "./components/SearchResult";
import LeftNavMenuItem from "./components/LeftNavMenuItem";
import SearchResultVideoCard from "./components/SearchResultVideoCard";
import SuggestionVideoCard from "./components/SuggestionVideoCard";
import VideoCard from "./components/VidoeCard";
import VideoDetails from "./components/VideoDetails";

export default function App() {
  return (
    <AppContext>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </AppContext>
  );
}
