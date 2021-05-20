package com.mycompany.myapp.respone.branch;

public class BranchCountResponse {

    private Long count;

    public BranchCountResponse() {}

    public BranchCountResponse(Long count) {
        this.count = count;
    }

    public Long getCount() {
        return count;
    }

    public void setCount(Long count) {
        this.count = count;
    }
}
