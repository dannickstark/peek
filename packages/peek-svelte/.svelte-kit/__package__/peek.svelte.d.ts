import { type Gaze, type PeekOptions } from '@doan-labs/peek/adapter';
type Props = Omit<PeekOptions, 'gaze' | 'id'> & {
    name: string;
    gaze?: Gaze | 'pointer';
    animate?: boolean;
    id?: string;
    class?: string;
    style?: string;
};
declare const Peek: import("svelte").Component<Props, {}, "">;
type Peek = ReturnType<typeof Peek>;
export default Peek;
