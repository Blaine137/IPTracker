package com.iptracker.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.iptracker.constants.Constants;

@RestController
@CrossOrigin(origins = Constants.CLIENT_URL)
public class TrackerController {
    
    @GetMapping("doTest")
    public String doTest(){
        return "testing";
    }

}
