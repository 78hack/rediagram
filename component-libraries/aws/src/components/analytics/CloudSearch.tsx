import React, { FC, useMemo } from 'react';
import { IconNode, HasDependences, useLabelText } from '@rediagram/cdk';
import { useAssertProvider } from '../../hooks/assert-provider';
import { resolveAsset } from '../../assets';

export type CloudSearchType = 'Search documents';

export type CloudSearchProps = {
  type?: CloudSearchType;
  name: string;
} & HasDependences;

function resolveImage(type?: CloudSearchType): string {
  switch (type) {
    case 'Search documents':
      return resolveAsset('analytics/CloudSearch/Search-documents.png');
    default:
      return resolveAsset('analytics/CloudSearch.png');
  }
}

function useIcon(type?: CloudSearchType): { path: string; size: number } {
  return useMemo(() => {
    return {
      path: resolveImage(type),
      size: type === undefined ? 56 : 37,
    };
  }, [type]);
}

export const CloudSearch: FC<CloudSearchProps> = ({ type, name, children, upstream, downstream }) => {
  useAssertProvider();
  const icon = useIcon(type);
  const label = useLabelText(children, { defaultValue: name, htmlLike: true });
  return <IconNode name={name} icon={icon} label={label} upstream={upstream} downstream={downstream} />;
};

CloudSearch.displayName = 'CloudSearch';
