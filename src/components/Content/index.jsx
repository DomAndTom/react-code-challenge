/* eslint-disable */
import { useEffect, useState } from "react";
import Search from "../Search";
import Wrapper from "../Wrapper";
import { useSearchContext } from "../../contexts/search";

import { searchRamone } from "../../helpers/search";
import {list} from "../../list.js";

export default function Content() {
  const [ramones, setRamones] = useState([]);
  const { search } = useSearchContext();

  useEffect(() => {
    setRamones(searchRamone(search, list));
  }, []);

  return (
    <>
      <Search />
      <Wrapper>
        Display the list of Ramones members using the Card component and fix the
        broken search input
      </Wrapper>
    </>
  );
}
