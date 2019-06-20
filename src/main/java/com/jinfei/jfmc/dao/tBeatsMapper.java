package com.jinfei.jfmc.dao;

import com.jinfei.jfmc.model.tBeats;

import java.util.List;

public interface tBeatsMapper {
    List<tBeats> getSelect();

    List<tBeats> gettBeatsList(String equipName);

    List<tBeats> gettBeatsCount();

    List<tBeats> getMechanicalBeatsCount();
}