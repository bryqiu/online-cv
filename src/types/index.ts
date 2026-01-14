export interface TimeRange {
  /**
   * 开始时间 (推荐格式 YYYY-MM)
   */
  startTime: string
  /**
   * 结束时间 (推荐格式 YYYY-MM)
   */
  endTime: string
}

/**
 * 工作经历
 */
export interface WorkExperience extends TimeRange {
  /**
   * 公司名称
   */
  company: string
  /**
   * 公司官网
   */
  url?: string
  /**
   * 职位
   */
  position: string | string[]
  /**
   * 工作亮点描述
   */
  highlights: string[]
}

/**
 * 项目经验
 */
export interface Project {
  /**
   * 项目名称
   */
  name: string
  /**
   * 职位
   */
  position: string | string[]
  /**
   * 项目一句话总结
   */
  summary: string
  /**
   * 详细描述
   */
  description: string[]
  /**
   * 项目链接
   */
  url?: string
  /**
   * 技术栈
   */
  techStack: string[]
}

/**
 * 教育经历
 */
export interface Education extends TimeRange {
  /**
   * 学校名称
   */
  school: string
  /**
   * 主修专业
   */
  major: string
  /**
   * 学历
   */
  degree?: string
  /**
   * 描述
   * @example "GPA/4.0","主修课程：算法与数据结构..."
   */
  description?: string[]
}

/**
 * 开源项目
 */
interface OpenSourceProject {
  /**
   * 项目名称
   */
  name: string
  /**
   * 项目描述
   */
  description: string
  /**
   * 项目链接
   */
  url: string
  /**
   * 获得的 Star 数
   */
  stars?: number
  /**
   * 技术栈
   */
  techStack?: string[] // 开源项目也应该有技术栈
}

export type SocialType = 'x' | 'instagram' | 'jueJin' | 'github' | 'linkedin' | 'blog'

export type ContactType = 'email' | 'phone' | 'wx'
export interface ContactMethod {
  type: ContactType
  value: string
}

export interface SocialMethod {
  /**
   * 社交平台类型
   */
  type: SocialType
  /**
   * 名称
   */
  label?: string
  /**
   * 链接
   */
  value: string
}

/**
 * 个人介绍
 */
export interface Introduce {
  /**
   * 姓名
   */
  name: string
  /**
   * 头像加载失败、loading时的兜底显示
   */
  avatarFallback?: string
  /**
   * 职业标签
   */
  tags?: string[]
  /**
   * 简短介绍
   */
  about: string
  /**
   * 头像链接
   */
  avatarUrl?: string
  /**
   * 联系方式
   */
  contactMethods: ContactMethod[]
  /**
   * 社交媒体账号
   */
  socialMethods: SocialMethod[]
}

/**
 * 简历数据
 */
export interface ResumeSchema {
  /**
   * 基本介绍信息
   */
  introduce: Introduce
  /**
   * 工作经历
   */
  workExperiences: WorkExperience[]
  /**
   * 项目经验
   */
  projects: Project[]
  /**
   * 技能
   */
  skills: string[]
  /**
   * 教育经历
   */
  educations: Education[]
  /**
   * 开源项目
   */
  openSourceProjects?: OpenSourceProject[]
  meta?: {
    theme?: 'light' | 'dark' | 'system'
    lastModified?: string
  }
}
