import { IPresetBank } from "@/shared/interfaces/presets/IPresetBank";
import { IJvaSettings } from "@/shared/interfaces/presets/IJvaSettings";
import { ArpeggioMode, IComputerMidiKeyboardSettings } from "@/shared/interfaces/presets/IComputerMidiKeyboardSettings";

const getDefaultJvaSettings = function(): IJvaSettings {
  return {
    oscillator1: {
      volume: -12,
      transpose: 0,
      detune: -5,
      type: "sawtooth"
    },
    oscillator2: {
      volume: -12,
      transpose: -12,
      detune: 0,
      type: "triangle"
    },
    oscillator3: {
      volume: -12,
      transpose: 0,
      detune: 7,
      type: "sawtooth"
    },
    oscillatorSpread: 0.4,
    amp: {
      envelope: {
        attack: 0,
        decay: 400,
        sustain: 0.8,
        release: 200
      },
      modulationAmount: 0,
      modulationRate: 4
    },
    filter: {
      envelope: {
        attack: 300,
        decay: 300,
        sustain: 0.8,
        release: 200
      },
      envelopeAmount: 0.7,
      frequency: 5000,
      q: 3,
      type: "lowpass",
      modulationAmount: 0,
      modulationRate: 4
    },
    pitch: {
      modulationAmount: 0,
      modulationRate: 8
    },
    noise: {
      type: "white",
      volume: -24
    },
    volume: -12
  };
};

const getDefaultComputerMidiKeyboardSettings = function(): IComputerMidiKeyboardSettings {
  return {
    arpOn: false,
    arpMode: ArpeggioMode.UP,
    arpNodeRepeat: 1,
    chordTrigger: [0],
    octaveOffset: 48,
    transposeOffset: 0
  };
}

export const getDefaultJvaBank = function(): IPresetBank {
  return {
    _id: "0",
    categories: [{
      category: "local",
      presets: [{
        name: "default",
        version: 0,
        private: false,
        settings: getDefaultJvaSettings()
      }]
    }]
  }
}

export const getDefaultComputerMidiKeyboardBank = function(): IPresetBank {
  return {
    _id: "0",
    categories: [{
      category: "local",
      presets: [{
        name: "default",
        version: 0,
        private: false,
        settings: getDefaultComputerMidiKeyboardSettings()
      }]
    }]
  }
}

