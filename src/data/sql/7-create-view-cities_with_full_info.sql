
    SELECT(
    SELECT json_agg(
      json_build_object(
        'name', ta.name,
        'description', ta.description,
        'cityId', ta.city_id
      )
    )
    FROM tourist_attractions ta
    WHERE ta.city_id = c.id
  ) AS tourist_attractions,
  -- Nested city categories as JSON array.
  (
    SELECT json_agg(
      json_build_object(
        'id', cc.id,
        'name', cc.name,
        'description', cc.description,
        'code', cc.code
      )
    )
    FROM categories cc
    JOIN city_categories ccl ON ccl.category_id = cc.id
    WHERE ccl.city_id = c.id
  ) AS categories
FROM cities c;