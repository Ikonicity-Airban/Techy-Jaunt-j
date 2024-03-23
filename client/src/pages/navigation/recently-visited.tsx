import { Card } from "../../components";
import { IoArrowRedoCircle } from "react-icons/io5";
import { ListDocs } from "../../api/juno/actions";
import useQuery from "../../api/hooks/useFetch";

interface INavigation {
  location: string;
  navigation: string;
}

function RecentlyVisited() {
  const { col, loading } = useQuery(() =>
    ListDocs<INavigation>("recently-visited", {
      matcher: {
        key: "",
      },
    })
  );

  if (loading)
    return (
      <center>
        <IoArrowRedoCircle />
      </center>
    );

  return (
    <div className="space-y-2">
      {col?.matches_length ? (
        col?.items.map(({ data, key }) => (
          <Card className="shadow-pop" key={key}>
            {data.location} ====&gt; {data.navigation}
          </Card>
        ))
      ) : (
        <Card className="shadow-pop rounded-lg py-6 px-4">
          <p>No located sites available</p>
        </Card>
      )}
    </div>
  );
}

export default RecentlyVisited;
