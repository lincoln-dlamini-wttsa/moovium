package org.movium.model;

import java.util.List;

public record SearchTitleResponse(List<SearchMovieResponseDTO> results, String searchType, String expression){}
