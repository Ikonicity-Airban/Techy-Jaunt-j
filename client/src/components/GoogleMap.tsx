// import { URLSearchParams } from "url";

import { useEffect, useState } from "react";

type Props = {
  query: string;
};

// google map search with location completion

//
function GoogleMap({ query = "Enugu" }: Props) {
  const [searchQuery] = useState(
    `https://maps.google.com/maps?width=600&height=400&hl=en&q=${query}&t=&z=14&ie=UTF8&iwloc=B&output=embed`
  );

  useEffect(() => {
    getLocations(query);
  }, []);

  /* geo location getter*/
  const getLocations = async (text: string) => {
    if (!text) return;
    try {
      const requestOptions = {
        method: "GET",
      };
      const response = await fetch(
        `https://api.geoapify.com/v1/geocode/autocomplete?text=${text}&apiKey=1c57a6a14c97478aad78de9a52e4cd66`,
        requestOptions
      );
      return response.json();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="overflow-x-auto">
      <section>
        <div className="relative laptop:h-[80vh] grid overflow-x-auto">
          <div className="g_map_outer">
            <div className="g_map_canvas">
              <iframe
                className="g_map_iframe"
                allowFullScreen
                // height="100%"
                // width="100%"
                src={searchQuery}
              ></iframe>
              <a href="https://capcuttemplate.org/">Capcuttemplate.org</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
/* <style></style> */

export default GoogleMap;
