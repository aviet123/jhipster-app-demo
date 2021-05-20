package com.mycompany.myapp.respone.branch;

import com.mycompany.myapp.service.dto.BranchDTO;
import java.util.List;

public class BranchCountResponse {

    private Long count;

    private List<BranchDTO> branchDTOS;

    public BranchCountResponse() {}

    public BranchCountResponse(Long count) {
        this.count = count;
    }

    public BranchCountResponse(Long count, List<BranchDTO> branchDTOS) {
        this.count = count;
        this.branchDTOS = branchDTOS;
    }

    public List<BranchDTO> getBranchDTOS() {
        return branchDTOS;
    }

    public void setBranchDTOS(List<BranchDTO> branchDTOS) {
        this.branchDTOS = branchDTOS;
    }

    public Long getCount() {
        return count;
    }

    public void setCount(Long count) {
        this.count = count;
    }
}
