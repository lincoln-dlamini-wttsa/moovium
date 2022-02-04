package org.movium.model;

import java.net.URL;

public record MovieTitleDTO( String id,String title,URL image,String year,String runtimeStr,String contentRating,String genres,String plot,String directors,String stars){}
