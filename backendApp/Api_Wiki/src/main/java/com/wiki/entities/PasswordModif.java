package com.wiki.entities;

public class PasswordModif {

    private String oldpassword;
    private String newpassword;

    public PasswordModif() {
    }

    public PasswordModif(String oldpassword, String newpassword) {
        this.oldpassword = oldpassword;
        this.newpassword = newpassword;
    }

    public String getOldpassword() {
        return oldpassword;
    }

    @Override
    public String toString() {
        return "PasswordModif{" +
                "oldpassword='" + oldpassword + '\'' +
                ", newpassword='" + newpassword + '\'' +
                '}';
    }

    public void setOldpassword(String oldpassword) {
        this.oldpassword = oldpassword;
    }

    public String getNewpassword() {
        return newpassword;
    }

    public void setNewpassword(String newpassword) {
        this.newpassword = newpassword;
    }
}
