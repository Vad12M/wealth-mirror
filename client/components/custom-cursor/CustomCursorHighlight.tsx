import { ReactNode, RefObject, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { CursorState, customCursorMutations } from "@/store/reducers/customCursor.reducer";
import Link from "next/link";

export function useCustomCursorHighlight<T extends Element>(ref: RefObject<T>, deps: any) {
  const dispatch = useDispatch();
  useEffect(() => {
    if (!ref.current) {
      return;
    }

    const onFn = () => dispatch(customCursorMutations.setCustomCursorState(CursorState.active));
    const offFn = () => dispatch(customCursorMutations.setCustomCursorState(CursorState.default));

    ['a', 'button'].forEach(selector => Array.from(ref.current?.querySelectorAll(selector) ?? []).forEach((element: Element) => {
      element.addEventListener('mouseenter', onFn);
      element.addEventListener('mouseleave', offFn);
    }));

    return () => ['a', 'button'].forEach(selector => Array.from(ref.current?.querySelectorAll(selector) ?? []).forEach((element: Element) => {
      element.removeEventListener('mouseenter', onFn);
      element.removeEventListener('mouseleave', offFn);
    }));
  }, [deps]);
}

export const CustomCursorHighlight = ({ children, className }: { children: ReactNode, className?: string }) => {
  const ref = useRef<HTMLDivElement>(null);

  useCustomCursorHighlight(ref, children);

  return (<div ref={ref} className={className}>{children}</div>);
}

export function useActiveState<T extends Element>(ref: RefObject<T>) {
  const dispatch = useDispatch();

  useEffect(() => {
    if (!ref.current) {
      return;
    }

    const onFn = () => dispatch(customCursorMutations.setCustomCursorState(CursorState.active));
    const offFn = () => dispatch(customCursorMutations.setCustomCursorState(CursorState.default));

    ref.current.addEventListener('mouseenter', onFn);
    ref.current.addEventListener('mouseleave', offFn);

    return () => {
      ref.current?.removeEventListener('mouseenter', onFn);
      ref.current?.removeEventListener('mouseleave', offFn);
    }
  }, []);
}

export function Anchor({ children, ...props }: { children: ReactNode } & any) {
  const ref = useRef<HTMLAnchorElement>(null);
  useActiveState(ref);
  return <Link {...props} ref={ref} href={props.href}>{children}</Link>
}
