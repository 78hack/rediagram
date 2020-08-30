import { resolve } from 'path';
import React, { FC, useMemo } from 'react';
import { HasDependences, useLabelText } from '@rediagram/cdk';
import { useAssertProvider } from '../../hooks/assert-provider';
import { GCPNode } from '../internal/GCPNode';

export type CloudFilestoreProps = {
  name: string;
  description?: string;
} & HasDependences;

function resolveImage(): string {
  return resolve(__dirname, '../../../assets/storage/CloudFilestore.png');
}

function useIcon(): { path: string; size: number } {
  return useMemo(() => {
    return {
      path: resolveImage(),
      size: 40,
    };
  }, []);
}

export const CloudFilestore: FC<CloudFilestoreProps> = ({ name, description, children, upstream, downstream }) => {
  useAssertProvider();
  const icon = useIcon();
  const label = useLabelText(children, { defaultValue: name, htmlLike: true });
  return (
    <GCPNode
      service="Cloud Filestore"
      name={name}
      description={description}
      icon={icon}
      label={label}
      upstream={upstream}
      downstream={downstream}
    />
  );
};

CloudFilestore.displayName = 'CloudFilestore';