package com.jinfei.jfmc.model;

public class tBeats {
    private Integer id;

    private String equipno;

    private String equipname;

    private Integer mechanicalbeats;

    private Integer personbeats;

    private Integer count;

    private Integer mechanical;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getEquipno() {
        return equipno;
    }

    public void setEquipno(String equipno) {
        this.equipno = equipno == null ? null : equipno.trim();
    }

    public String getEquipname() {
        return equipname;
    }

    public void setEquipname(String equipname) {
        this.equipname = equipname == null ? null : equipname.trim();
    }

    public Integer getMechanicalbeats() {
        return mechanicalbeats;
    }

    public void setMechanicalbeats(Integer mechanicalbeats) {
        this.mechanicalbeats = mechanicalbeats;
    }

    public Integer getPersonbeats() {
        return personbeats;
    }

    public void setPersonbeats(Integer personbeats) {
        this.personbeats = personbeats;
    }

    public Integer getCount() {
        return count;
    }

    public void setCount(Integer count) {
        this.count = count;
    }

    public Integer getMechanical() {
        return mechanical;
    }

    public void setMechanical(Integer mechanical) {
        this.mechanical = mechanical;
    }
}