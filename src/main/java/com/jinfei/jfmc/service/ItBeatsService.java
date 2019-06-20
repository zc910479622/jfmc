package com.jinfei.jfmc.service;

import com.jinfei.jfmc.model.tBeats;

import java.util.List;

public interface ItBeatsService {
    List<tBeats> getSelect();

    List<tBeats> gettBeatsList(String equipName);

    List<tBeats> gettBeatsCount();

    List<tBeats> getMechanicalBeatsCount();
}
