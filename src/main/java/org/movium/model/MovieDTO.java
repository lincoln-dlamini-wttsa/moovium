package org.movium.model;

import java.net.URL;

public record MovieDTO(String title, String type, String year, String imDbId, String videoId, URL videoUrl){}
