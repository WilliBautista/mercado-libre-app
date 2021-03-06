import { useEffect, useRef, useState } from "react";
import PropTypes from 'prop-types';
const baseUrl = process.env.REACT_APP_API_URL;

export const useFetch = (endpoint, param) => {
  const isMounted = useRef(true);
  const [jsonData, setJsonData] = useState({
    loading: true,
    error: false,
    data: null,
  });

  useEffect(() => {
    return () => (isMounted.current = false);
  }, []);

  useEffect(() => {
    setJsonData({
      loading: true,
      error: false,
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
            error: false,
            data,
          });
        })
        .catch(() => {
          setJsonData({
            loading: true,
            error: true,
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
