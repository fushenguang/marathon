import { createSlice } from '@reduxjs/toolkit';

import { RootState } from '@store/index';
import { DEFAULT_USED_MODULES, ModuleItem } from './constants/resume-modules';

export interface ResumeState {
  usedModuleList: ModuleItem[];
  unusedModuleList: ModuleItem[];
}

const initialState: ResumeState = {
  usedModuleList: DEFAULT_USED_MODULES,
  unusedModuleList: [],
};

const resumeSlice = createSlice({
  name: 'resume',
  initialState,
  reducers: {
    setUsedModuleList: (state: ResumeState, action) => {
      state.usedModuleList = action.payload;
    },
    setUnusedModuleList: (state: ResumeState, action) => {
      state.unusedModuleList = action.payload;
    },
  },
});

export const { setUsedModuleList, setUnusedModuleList } = resumeSlice.actions;

export const selectUsedModuleList = (state: RootState) => state.resume.usedModuleList;

export const selectUnusedModuleList = (state: RootState) => state.resume.unusedModuleList;

export default resumeSlice.reducer;
