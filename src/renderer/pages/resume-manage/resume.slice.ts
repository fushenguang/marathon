import { createSlice } from '@reduxjs/toolkit';
import produce from 'immer';

import { RootState } from '@store/index';
import { DEFAULT_USED_MODULES, ModuleItem } from './constants/resume-modules';

export interface ResumeState {
  editingModuleName: string;
  usedModuleList: ModuleItem[];
  unusedModuleList: ModuleItem[];
}

const initialState: ResumeState = {
  editingModuleName: '',
  usedModuleList: DEFAULT_USED_MODULES,
  unusedModuleList: [],
};

const resumeSlice = createSlice({
  name: 'resume',
  initialState,
  reducers: {
    setEditingModuleName: (state: ResumeState, action) => {
      produce(state, (draft) => {
        draft.editingModuleName = action.payload;
      });
    },
    setUsedModuleList: (state: ResumeState, action) => {
      produce(state, (draft) => {
        const curModule = draft.usedModuleList.find((item) => item.moduleName === action.payload.moduleName);
        if (curModule) {
          curModule.detail = action.payload.detail;
        }
      });
    },
    setUnusedModuleList: (state: ResumeState, action) => {
      state.unusedModuleList = action.payload;
    },
  },
});

export const { setEditingModuleName, setUsedModuleList, setUnusedModuleList } = resumeSlice.actions;

export const selectUsedModuleList = (state: RootState) => state.resume.usedModuleList;

export const selectUnusedModuleList = (state: RootState) => state.resume.unusedModuleList;

export default resumeSlice.reducer;
