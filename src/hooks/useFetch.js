import { useEffect, useRef, useState } from "react";
import PropTypes from 'prop-types';
const baseUrl = process.env.REACT_APP_API_URL;

console.log(baseUrl);

export const useFetch = (endpoint, param) => {
  const isMounted = useRef(true);
  const [jsonData, setJsonData] = useState({
    loading: true,
    error: null,
    data: null,
  });

  useEffect(() => {
    return () => (isMounted.current = false);
  }, []);

  useEffect(() => {
    setJsonData({
      loading: true,
      error: null,
      data: null,
    });

    if (!!param && param.trim().length && isMounted.current) {
      fetch(`${baseUrl}/${endpoint}`)
        .then(resp => {
          if (resp.status !== 200) throw resp.json();
          return resp.json();
        })
        .then(data => {
          setJsonData({
            loading: false,
            error: null,
            data,
          });
        })
        .catch(() => {
          setJsonData({
            loading: false,
            error: "No es posible obtener la información.",
            data: null,
          });
        });
    }
  }, [endpoint, param]);

  return jsonData;
};

useFetch.propTypes = {
  endpoint: PropTypes.string.isRequired,
  param: PropTypes.string.isRequired,
  type: PropTypes.string,
};
