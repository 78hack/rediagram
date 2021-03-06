import React, { FC, useMemo } from 'react';
import { HasDependences, useLabelText } from '@rediagram/cdk';
import { resolveAsset } from '../../assets';
import { useAssertProvider } from '../../hooks/assert-provider';
import { GCPNode } from '../internal/GCPNode';

export type KubernetesEngineProps = {
  name: string;
  description?: string;
} & HasDependences;

function resolveImage(): string {
  return resolveAsset('compute/KubernetesEngine.png');
}

function useIcon(): { path: string; size: number } {
  return useMemo(() => {
    return {
      path: resolveImage(),
      size: 40,
    };
  }, []);
}

export const KubernetesEngine: FC<KubernetesEngineProps> = ({ name, description, children, upstream, downstream }) => {
  useAssertProvider();
  const icon = useIcon();
  const label = useLabelText(children, { defaultValue: name, htmlLike: true });
  return (
    <GCPNode
      service="Kubernetes Engine"
      name={name}
      description={description}
      icon={icon}
      label={label}
      upstream={upstream}
      downstream={downstream}
    />
  );
};

KubernetesEngine.displayName = 'KubernetesEngine';
