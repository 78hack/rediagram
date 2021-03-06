import React, { FC, useMemo } from 'react';
import { HasDependences, useLabelText } from '@rediagram/cdk';
import { resolveAsset } from '../../assets';
import { useAssertProvider } from '../../hooks/assert-provider';
import { GCPNode } from '../internal/GCPNode';

export type CloudNaturalLanguageAPIProps = {
  name: string;
} & HasDependences;

function resolveImage(): string {
  return resolveAsset('ai-ml/CloudNaturalLanguageAPI.png');
}

function useIcon(): { path: string; size: number } {
  return useMemo(() => {
    return {
      path: resolveImage(),
      size: 40,
    };
  }, []);
}

export const CloudNaturalLanguageAPI: FC<CloudNaturalLanguageAPIProps> = ({ name, children, upstream, downstream }) => {
  useAssertProvider();
  const icon = useIcon();
  const label = useLabelText(children, { defaultValue: name, htmlLike: true });
  return (
    <GCPNode
      service="Cloud Natural Language API"
      name={name}
      icon={icon}
      label={label}
      upstream={upstream}
      downstream={downstream}
    />
  );
};

CloudNaturalLanguageAPI.displayName = 'CloudNaturalLanguageAPI';
