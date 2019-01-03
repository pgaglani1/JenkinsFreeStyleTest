define({
    root: {
        t1: {
            t1t1: "case1",
            t1t2: "case\"2",
            	t1t3: "case'3",
            	t1t4: "ca\"se'4",
            	t1t5: ["case5"],
            	t1t6: ["case6", "cas\"e7"]
        },
        t2: {
            t2t1: {
            	    t2t1t1: "case8",
            	    t2t1t2: {
            	    		t2t1t2t1: "case9"
            	    }
            }
        },
        t3: {
        		t3t1: [{title:"case10", method:"method1"}],
        		t3t2: [{title:"cas'e11", method:"method2"}, {title:"cas\"e12", method:"method3"}]
        }
    },
    // START NON-TRANSLATABLE
    "es": true,
    "ja": true,
    "pt": true,
    "de": true,
    "fr": true,
    "fr-ca": true,
    "zh": true,
    "zz": true
    // END NON-TRANSLATABLE
});
